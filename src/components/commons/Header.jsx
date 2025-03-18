import { LeftArrow } from "neetoicons";
import { Typography } from "neetoui";
import { keys } from "ramda";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import routes from "routes";
import useCartItemsStore from "stores/useCartItemsStore";

const Header = ({ title, shouldShowBackButton = true, actionBlock }) => {
  const cartItemsCount = useCartItemsStore(
    store => keys(store.cartItems).length
  );
  const history = useHistory();

  return (
    <div className="border-b-4 border-black">
      <div className="mx-6 flex items-end justify-between py-2">
        <div className="flex items-center gap-2">
          {shouldShowBackButton && (
            <LeftArrow
              className="hover:neeto-ui-bg-gray-400 neeto-ui-rounded-full mr-6"
              onClick={history.goBack}
            />
          )}
          <Typography style="h1" weight="semibold">
            {title}
          </Typography>
        </div>
        <div className="flex items-center gap-4">
          {actionBlock}
          <Link to={routes.cart}>
            <div className="relative">
              {cartItemsCount > 0 && (
                <span className="w-fit absolute right-0 flex h-5 w-5 items-center justify-center rounded-full bg-black p-1 text-white">
                  {cartItemsCount}
                </span>
              )}
              <AiOutlineShoppingCart size="2rem" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
