import PropTypes from 'prop-types';

const FixedElement = ({ background, left }) => {
  return (
    <div
      style={{
        background,
        left,
        position: 'fixed',
        top: '0px',
        width: '100px',
        height: '100px',
      }}
    />
  );
};

FixedElement.propTypes = {
  background: PropTypes.string.isRequired,
  left: PropTypes.string.isRequired,
}

export default FixedElement;
