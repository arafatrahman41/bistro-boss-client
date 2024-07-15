import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-3/12 mt-16 mb-8">
      <p className="text-yellow-500 mb-2">---{subHeading}---</p>
      <p className="text-3xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default SectionTitle;
