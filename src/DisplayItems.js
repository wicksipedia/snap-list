function DisplayItems({visible, items}) {

  if (visible) {
    return (
        <div>
            <pre>{items.join(',')}</pre>
        </div>
    );
  }
}

export default DisplayItems;
