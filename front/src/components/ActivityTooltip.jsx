import PropTypes from "prop-types";

const units = { kilogram: "kg", calories: "kCal" };

function ActivityTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="activity-tooltip">
        {payload.map(({ dataKey, value }, index) => (
          <p key={index}>
            {value} {units[dataKey] ?? ""}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

ActivityTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

export default ActivityTooltip;
