import { LeftArrow } from "neetoicons";
import { Typography } from "neetoui";
import { useHistory } from "react-router-dom";

const Header = ({ title, shouldShowBackButton = true, actionBlock }) => {
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
        <div className="flex items-center gap-4">{actionBlock}</div>
      </div>
    </div>
  );
};

export default Header;
