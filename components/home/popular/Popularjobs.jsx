import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../../hook/useFetch"

import styles from "./popularjobs.style";
import { isLoading } from "expo-font";
import { COLORS, SIZES } from "../../../constants";
import { useRouter } from "expo-router";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();

  const {data, isLoading, error} = useFetch('search', {
    query: 'React Developer',
    page: '1',
    num_pages: '1'
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
