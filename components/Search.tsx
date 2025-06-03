// import { View, Text, TextInput, StyleSheet, Image} from 'react-native'
// import searchIcon from '../assets/images/search.png';


// export default function Search() {
//   return (
//     <View style={searchStyles.search}>
//         <Image source={searchIcon} style={searchStyles.searchIcon}/>
//         <TextInput placeholder="Search..." placeholderTextColor="rgba(203, 213, 225, 1)" style={searchStyles.searchInput}/>
//     </View>
//   )
// }

// const searchStyles = StyleSheet.create({
//   search: {
//     width: 343,
//     height: 36,
//     borderRadius: 5,
//     padding: 8,
//     gap: 8,
//     display: "flex",
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "rgba(226, 232, 240, 1)",
//   },
//   searchIcon: {
//     width: 20,
//     height: 20
//   },
//   searchInput: {
//     width: 299,
//     height: 20,
//     fontFamily: "IBMPlexSans-Medium",
//     fontSize: 14, 
//     fontWeight: 400,
//     backgroundColor: "white",
//     color: "#0f172a",
//   }
// })
  

import { View, TextInput, StyleSheet, Image } from 'react-native';
import searchIcon from '../assets/images/search.png';

export default function Search() {
  return (
    <View style={searchStyles.search}>
      <Image source={searchIcon} style={searchStyles.searchIcon} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="rgba(203, 213, 225, 1)"
        style={searchStyles.searchInput}
      />
    </View>
  );
}

const searchStyles = StyleSheet.create({
  search: {
    width: 343,
    height: 36,
    borderRadius: 5,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(226, 232, 240, 1)',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontFamily: "IBMPlexSans-Medium",
    fontSize: 14,
    fontWeight: '400',
    color: "#0f172a", // For user-entered text
    backgroundColor: "transparent",
    paddingVertical: 0,           // Prevent default vertical padding               // Matches the fontSize or slightly higher
    includeFontPadding: false,    // Android only: disables extra font padding
    textAlignVertical: 'center',  // Ensures vertical centering
  },

});
