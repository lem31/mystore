import favoriteStyles from "../../CSS_Modules/Favorites/index.module.css";
import useMyStore from "../Store";
import gStyles from "../../CSS_Modules/Global_Styles/global_styles.module.css";

const FavoritesSidebar = ({ closeSidebar }) => {
  const { products, favorites, toggleFavorite } = useMyStore();
  return (
    <div className={favoriteStyles.sidebar}>
      <button
        className={favoriteStyles.closeButton}
        onClick={closeSidebar}
      >
        ✖
      </button>
      <h2 className={gStyles.h2}>Your Favorite Products ❤️</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        products
          .filter((product) => favorites.includes(product.id))
          .map((product) => (
            <div
              key={product.id}
              className={favoriteStyles.favoriteItem}
            >
              <img
                src={product.image.url}
                alt={product.title}
                width="50"
              />
              <p>{product.title}</p>
              <p>${product.discountedPrice.toFixed(2)}</p>
              <button onClick={() => toggleFavorite(product.id)}>
                Remove ❤️
              </button>
            </div>
          ))
      )}
    </div>
  );
};

export default FavoritesSidebar;
