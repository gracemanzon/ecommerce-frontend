export function ProductNew() {
  return (
    <div id="products-new" className="form">
      <h1>New Product</h1>
      <form>
        <div>
          <p>
            Title: <input type="text" />
          </p>
        </div>
        <div>
          <p>
            Image URL: <input type="text" />
          </p>
        </div>
        <div>
          <p>
            Description: <input type="text" />
          </p>
        </div>
        <div>
          <p>
            Price: <input type="text" />
          </p>
        </div>
        <div>
          <p>
            Inventory: <input type="text" />
          </p>
        </div>
        <button type="submit">
          <p>Submit</p>
        </button>
      </form>
    </div>
  );
}
