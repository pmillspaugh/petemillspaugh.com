import { useEffect, useState } from "react";
import styled from "styled-components";
import Switch from "@/components/Switch";
import { LocalStorageKey } from "@/constants";

const AudioSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedAudioPreference = JSON.parse(
      localStorage.getItem(LocalStorageKey.AudioEnabled)
    );

    if (storedAudioPreference !== null) {
      setIsChecked(storedAudioPreference);
    }
  }, []);

  const handleCheckedChange = () => {
    setIsChecked(!isChecked);
    localStorage.setItem(
      LocalStorageKey.AudioEnabled,
      JSON.stringify(!isChecked)
    );
  };

  return (
    <StyledLabel>
      Enable audio
      <StyledSpan>
        <Switch
          isChecked={isChecked}
          handleCheckedChange={handleCheckedChange}
        />
      </StyledSpan>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  margin-top: 36px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: flex-start;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  font-weight: 700;
`;

const StyledSpan = styled.span`
  transform: translateY(-1px);
`;

export default AudioSwitch;
