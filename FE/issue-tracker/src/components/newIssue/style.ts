import theme from '@styles/theme.js';

const titleInput = {
  marginBottom: '16px',
  padding: '16px',
  height: '56px',
  variant: 'filled',
  background: 'gr_inputBackground',
  placeholder: '제목',
  borderRadius: '14px',
};

const contentsInput = {
  size: 'md',
  height: '291px',
  padding: '16px 24px',
  background: 'gr_inputBackground',
  placeholder: '코멘트를 입력하세요',
  variant: 'filled',
  borderRadius: '16px',
};

const progressBar = {
  hasStripe: true,
  colorScheme: 'green',
  borderRadius: '16px',
  marginBottom: '4px',
};

const modalStyle = {
  borderRadius: '16px',
  border: `1px solid ${theme.colors.gr_line}`,
  backgroundColor: theme.colors.gr_background,
  overflow: 'hidden',
};

const modalTitleStyle = {
  fontSize: '16px',
  fontWeight: '400',
};
const modalListStyle = {
  backgroundColor: theme.colors.gr_offWhite,
};

export {
  titleInput,
  contentsInput,
  progressBar,
  modalStyle,
  modalTitleStyle,
  modalListStyle,
};
