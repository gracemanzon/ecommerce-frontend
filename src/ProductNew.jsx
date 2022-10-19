export function ProductNew() {
  return (
    <div id="products-new">
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Image URL: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <div>
          Price: <input type="text" />
        </div>
        <div>
          Inventory: <input type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
