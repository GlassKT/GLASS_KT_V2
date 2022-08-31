import styled from "styled-components";

const InputName = styled.input<Input>``;

const HobbyContainer = styled.div``;

const HobbyAdd = styled.button``;

const HobbyItemContainer = styled.div<HobbyItemType>``;

const RequestButton = styled.div``;

export {
  InputName,
  HobbyContainer,
  HobbyAdd,
  HobbyItemContainer,
  RequestButton,
};

interface Input {
  type: string;
  value: string;
  onChange: any;
}

interface HobbyItemType {
  item: any;
}
