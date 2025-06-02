import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export const HeartIconToggle: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setIsActive(!isActive)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <View>
          {isActive ? (
            <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <Path
                d="M17.463 0.993977C14.781 -0.651023 12.44 0.0119772 11.034 1.06798C10.458 1.50098 10.17 1.71798 9.99998 1.71798C9.82998 1.71798 9.54198 1.50098 8.96598 1.06798C7.55998 0.0119772 5.21898 -0.651023 2.53698 0.993977C-0.982019 3.15298 -1.77802 10.274 6.33998 16.284C7.88598 17.427 8.65898 18 9.99998 18C11.341 18 12.114 17.428 13.66 16.283C21.778 10.275 20.982 3.15298 17.463 0.993977Z"
                fill="#FF2D55"
              />
            </Svg>
          ) : (
            <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
              <Path
                d="M18.463 1.99398C15.781 0.348977 13.44 1.01198 12.034 2.06798C11.458 2.50098 11.17 2.71798 11 2.71798C10.83 2.71798 10.542 2.50098 9.96598 2.06798C8.55998 1.01198 6.21898 0.348977 3.53698 1.99398C0.0179811 4.15298 -0.778019 11.274 7.33998 17.284C8.88598 18.427 9.65898 19 11 19C12.341 19 13.114 18.428 14.66 17.283C22.778 11.275 21.982 4.15298 18.463 1.99398Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          )}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});

// import React, { useState } from 'react';
// import { Pressable, View } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// // export default function HeartIconToggle() {
// const [isActive, setIsActive] = useState(false);

// export const HeartIconToggle = () => (
  

//     <Pressable
//       onPress={() => setIsActive(!isActive)}
//       style={({ pressed }) => ({
//         opacity: pressed ? 0.6 : 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       })}
//     >
//       <View>
//         {isActive ? (
//           <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
//             <Path
//               d="M17.463 0.993977C14.781 -0.651023 12.44 0.0119772 11.034 1.06798C10.458 1.50098 10.17 1.71798 9.99998 1.71798C9.82998 1.71798 9.54198 1.50098 8.96598 1.06798C7.55998 0.0119772 5.21898 -0.651023 2.53698 0.993977C-0.982019 3.15298 -1.77802 10.274 6.33998 16.284C7.88598 17.427 8.65898 18 9.99998 18C11.341 18 12.114 17.428 13.66 16.283C21.778 10.275 20.982 3.15298 17.463 0.993977Z"
//               fill="#FF2D55"
//             />
//           </Svg>
//         ) : (
//           <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
//             <Path
//               d="M18.463 1.99398C15.781 0.348977 13.44 1.01198 12.034 2.06798C11.458 2.50098 11.17 2.71798 11 2.71798C10.83 2.71798 10.542 2.50098 9.96598 2.06798C8.55998 1.01198 6.21898 0.348977 3.53698 1.99398C0.0179811 4.15298 -0.778019 11.274 7.33998 17.284C8.88598 18.427 9.65898 19 11 19C12.341 19 13.114 18.428 14.66 17.283C22.778 11.275 21.982 4.15298 18.463 1.99398Z"
//               stroke="black"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </Svg>
//         )}
//       </View>
//     </Pressable>
// );



// import React, { useState } from 'react';
// import { View, Pressable, StyleSheet } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// export default function HeartIconToggle() {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <View style={styles.container}>
//       <Pressable onPress={() => setIsActive(!isActive)}>
//         {isActive ? (
//           <Svg width="20" height="18" viewBox="0 0 20 18" fill="none">
//             <Path
//               d="M17.463 0.993977C14.781 -0.651023 12.44 0.0119772 11.034 1.06798C10.458 1.50098 10.17 1.71798 9.99998 1.71798C9.82998 1.71798 9.54198 1.50098 8.96598 1.06798C7.55998 0.0119772 5.21898 -0.651023 2.53698 0.993977C-0.982019 3.15298 -1.77802 10.274 6.33998 16.284C7.88598 17.427 8.65898 18 9.99998 18C11.341 18 12.114 17.428 13.66 16.283C21.778 10.275 20.982 3.15298 17.463 0.993977Z"
//               fill="#FF2D55"
//             />
//           </Svg>
//         ) : (
//           <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
//             <Path
//               d="M18.463 1.99398C15.781 0.348977 13.44 1.01198 12.034 2.06798C11.458 2.50098 11.17 2.71798 11 2.71798C10.83 2.71798 10.542 2.50098 9.96598 2.06798C8.55998 1.01198 6.21898 0.348977 3.53698 1.99398C0.0179811 4.15298 -0.778019 11.274 7.33998 17.284C8.88598 18.427 9.65898 19 11 19C12.341 19 13.114 18.428 14.66 17.283C22.778 11.275 21.982 4.15298 18.463 1.99398Z"
//               stroke="black"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </Svg>
//         )}
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // Example wrapper style
//     padding: 8,
//   },
// });
