import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};
