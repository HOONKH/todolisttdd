import { fireEvent, render } from "@testing-library/react";
import CreateTodo from "./CreateTodo";

describe("<CreateTodo />", () => {
  it("input & button 확인", () => {
    const { getByText, getByPlaceholderText } = render(<CreateTodo />);

    getByPlaceholderText("할일입력!");

    getByText("투두생성!");
  });

  it("input 값 확인", () => {
    const { getByPlaceholderText } = render(<CreateTodo />);

    const input = getByPlaceholderText("할일입력!");

    // console.log(input);
    fireEvent.change(input, {
      target: {
        value: "🎉폭죽놀이",
      },
    });
    // 이벤트들 온클릭 온체인지 온서브밋
    expect(input).toHaveAttribute("value", "🎉폭죽놀이");
  });

  it("투두생성", () => {
    const { getByText, getByPlaceholderText } = render(<CreateTodo />);
    const input = getByPlaceholderText;
    const submit = getByText;

    fireEvent.click(submit);

    expect(input).toHaveAttribute("value", "");
  });
});
