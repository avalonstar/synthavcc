import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;

  box-shadow: inset 0 0 0 1px ${props => props.theme.colors.gray[6]};
  border-radius: 4px;
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  text-transform: uppercase;
  transition: all 250ms ${props => props.theme.easing};
  white-space: nowrap;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 14px;

  color: ${props => props.theme.colors.gray[18]};
  font-family: ${props => props.theme.fonts.din};
  font-weight: 600;
`;

const Stat = styled.div`
  margin-left: 0;
  padding: 10px 14px;

  box-shadow: inset 1px 0 0 0 ${props => props.theme.colors.gray[6]};
  font-weight: 800;

  font-variant-numeric: tabular-nums;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
`;

export default {
  Wrapper,
  Title,
  Stat
};
