import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getTodos } from "../../api/todos";
import { removeTodo, updateTodo } from "../../api/todos";
import { useMutation, useQueryClient } from "react-query";

const Todolist = ({ isActive }) => {
    const { isLoading, isError, data } = useQuery("todos", getTodos);

    // json server에 있는 data를 조회해준다. 매우 중요 !!!!
    console.log({ data });
    const queryClient = useQueryClient();

    // 삭제 뮤테이션 !!!!!!!!!!!
    const mutation = useMutation(removeTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos"); //
            console.log("성공하였습니다.");
        },
    });

    // 수정 뮤테이션 !!!!!!!!!!!
    const mutation1 = useMutation(updateTodo, {
        onSuccess: () => {
            queryClient.invalidateQueries("todos"); //
            console.log("성공하였습니다.");
        },
    });

    // 쿼리 자체에서 제공해주는 메소드? !!!!!!!!!!!!
    if (isLoading) {
        return <h1>로딩 중입니다..!</h1>;
    }
    if (isError) {
        return <h1>에러가 발생했습니다.</h1>;
    }

    return (
        <StTodolistWarrper>
            <h2>{isActive ? "해야할 일" : "완료한 일"}</h2>
            {data
                .filter((item) => item.isDone === !isActive)
                .map((item) => {
                    return (
                        <StTodolist key={item.id}>
                            <StTitle> 제목: {item.title}</StTitle>
                            <StContents> 내용: {item.contents}</StContents>
                            <Stbutton
                                onClick={() => {
                                    mutation.mutate(item.id);
                                }}
                            >
                                삭제
                            </Stbutton>
                            <Stbutton
                                onClick={() => {
                                    mutation1.mutate(item.id);
                                }}
                            >
                                완료
                            </Stbutton>
                        </StTodolist>
                    );
                })}
        </StTodolistWarrper>
    );
};

export default Todolist;

const StTodolist = styled.div`
    background-color: lightgray;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
`;

const StTodolistWarrper = styled.div`
    background-color: lightgoldenrodyellow;
    padding: 20px;
`;

const Stbutton = styled.div`
    border: 1px solid black;
    border-radius: 3px;
    width: 50px;
    margin: 5px;
    cursor: pointer;
    padding: 3px;
`;

const StTitle = styled.div`
    font-size: 25px;
    margin: 10px;
`;

const StContents = styled.div`
    margin: 20px;
`;
