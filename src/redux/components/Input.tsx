import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../../api/todos";
import Button from "./common/Button";

const Input = () => {
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const queryClient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos"); //
            console.log("성공하였습니다.");
        },
    });

    return (
        <Form
            onSubmit={(event) => {
                event.preventDefault();

                const newTodo = {
                    title,
                    contents,
                    isDone: false,
                    id: uuidv4(),
                };

                mutation.mutate(newTodo);
            }}
        >
            <StInput
                placeholder="제목을 입력해주세요"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <StInput
                placeholder="내용을 입력해주세요"
                value={contents}
                onChange={(event) => {
                    setContents(event.target.value);
                }}
            />
            <Button text="클릭"></Button>
        </Form>
    );
};

export default Input;

const Form = styled.form`
    background-color: lightgreen;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StInput = styled.input`
    width: 200px;
    border: 1px solid black;
    height: 30px;
    background-color: white;
    margin: 10px;
    border-radius: 3px;
`;
