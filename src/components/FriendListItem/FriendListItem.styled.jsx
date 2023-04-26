import styled from "styled-components";
import StatusIsOnline from "../utils/StatusIsOnline";

const FriendListItemLi = styled.li`
  max-width: 100%;
  height: 90px;
  box-shadow: rgba(0, 0, 0, 0.37) 0px 2px 3px;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 4px;
  gap: 10px;
  .name {
    font-size: 26px;
    font-weight: 600;
  }
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  background: ${ StatusIsOnline };
  border-radius: 50%;
`;

const FriendListItemThumbImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${ StatusIsOnline };
  padding: 7px;
  box-sizing: border-box;

  .avatar {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export { FriendListItemLi, Status, FriendListItemThumbImage };
