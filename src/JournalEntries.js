import { memo } from "react";

const Entries = ({ entries }) => {
  console.log("child render");
  return (
    <>
      <h2>Journal Entries</h2>
      {entries.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}

    </>
  );
};

export default memo(Entries);