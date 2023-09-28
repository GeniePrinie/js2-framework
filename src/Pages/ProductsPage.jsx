import SearchDisplay from "../Components/ProductsDisplayComponents/SearchDisplay";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 className="text-secondary">Welcome to The Boutique!</h1>
        <p className="text-secondary">
          Need Help? Search bar is right below, or contact us in the Contact
          page. We hope you find what you're looking for. Good Luck!
        </p>
      </div>

      <SearchDisplay />
    </div>
  );
}

function Products() {
  return <div></div>;
}

export { Home, Products };
