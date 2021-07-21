import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 300px;

    span {
      display: block;
      background-color: #fff;
      border-radius: 50%;
      height: 12px;
      bottom: 14px;
      width: 12px;
    }

    input[type="range"] {
      -webkit-appearance: none;
      appearance: none;
      display: inline-block;
      width: 100%;
      height: 2px;
      position: absolute;
      border-radius: 5px;
      background-color: white;
      outline: none;
      top: 50%;
      transform: translateY(-50%);
      margin: 0;
    }

    #campo[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none; /* remove a aparencia padão */
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: white;
      background-image: url(${({ imageBullet }) => imageBullet});
    }
  }
`;

export const Image = styled.img`
  margin-bottom: 100px;
  width: 500px;
  background-color: white;
`;
