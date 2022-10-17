import CheckoutsBarChart from './CheckoutsBarChart';

const Checkouts = (props) => {
  const checkoutsData = {
    labels: Object.entries(props.checkouts).map(([key, value]) => key),
    datasets: [
      {
        label: 'Checkouts',
        data: Object.entries(props.checkouts).map(([key, value]) => value),
        backgroundColor: ['green', 'blue'],
      },
    ],
  };

  return (
    <div>
      <CheckoutsBarChart checkoutsData={checkoutsData} />
    </div>
  );
};

export default Checkouts;
