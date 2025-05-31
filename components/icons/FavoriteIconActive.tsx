import * as React from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

export const FavoriteIconActive = () => (
  <View
    style={{
      backgroundColor: "rgba(96, 181, 255, 1)",
      borderRadius: 16,
      width: 56,
      height: 32,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    <Svg width={20} height={22} viewBox="0 0 25 24" fill="none">
      <Path
        d="M19.838 3.99398C17.156 2.34898 14.815 3.01198 13.409 4.06798C12.833 4.50098 12.545 4.71798 12.375 4.71798C12.205 4.71798 11.917 4.50098 11.341 4.06798C9.935 3.01198 7.594 2.34898 4.912 3.99398C1.393 6.15298 0.596996 13.274 8.715 19.284C10.261 20.427 11.034 21 12.375 21C13.716 21 14.489 20.428 16.035 19.283C24.153 13.275 23.357 6.15298 19.838 3.99398Z"
        stroke="white"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);
