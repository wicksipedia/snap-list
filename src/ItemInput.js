function ItemInput({visible, onChange}) {

  if (visible) {
    return (
      <>
        <ol>
          <li>Enter the names (each name on a new line)</li>
          <li>*snap* 🫰 away</li>
        </ol>

        <div>
          <textarea onChange={e => onChange(e.target.value.split('\n'))} />
        </div>
      </>
    );
  }
}

export default ItemInput;
