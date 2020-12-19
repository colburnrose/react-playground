import React from "react";
import ReactDOM from "react-dom";
import Accordian from "./Accordian";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

describe(`Accordians Component`, () => {
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
    },
  ];

  it("renders without errors", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Accordian />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders empty given no sections", () => {
    const wrapper = shallow(<Accordian />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders empty given no sections", () => {
    const wrapper = shallow(<Accordian sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
