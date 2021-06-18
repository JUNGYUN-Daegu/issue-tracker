import styled from 'styled-components';
import { MenuList, MenuOptionGroup, MenuItemOption } from '@chakra-ui/react';
import { modalStyle, modalTitleStyle, modalListStyle } from '../style';

type Props = {
  milestones:
    | {
        id: number;
        title: string;
        description: string;
        due_date: string;
        opend_issue_count: number;
        closed_issue_count: number;
      }[]
    | null;
};

function MilestoneModal({ milestones }: Props) {
  return (
    <MenuList {...modalStyle}>
      <MenuOptionGroup {...modalTitleStyle} type="radio" title="마일스톤 추가">
        {milestones &&
          milestones.map(({ id, title, due_date }) => {
            return (
              <MenuItemOption {...modalListStyle} value={id.toString()}>
                <ItemWrap>
                  <span className="title">{title}</span>
                  <span className="due_date">{due_date}</span>
                </ItemWrap>
              </MenuItemOption>
            );
          })}
      </MenuOptionGroup>
    </MenuList>
  );
}

export default MilestoneModal;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    color: ${({ theme }) => theme.colors.gr_titleActive};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  .due_date {
    color: ${({ theme }) => theme.colors.gr_label};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;