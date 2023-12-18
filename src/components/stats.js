export default function Stats({ items }) {
  if (!items.length) {
    return (
      <em>
        <p className="stats">Start Adding items to your packing list</p>
      </em>
    );
  }

  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "you got everything! Ready to go ✈"
          : `💼 You have ${numItems} ${
              numItems <= 1 ? "item" : "items"
            } on your List, and you have already packed ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
