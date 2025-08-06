import { StyleSheet, FlatList, Text, TextInput, View, Dimensions, Pressable, SafeAreaView } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { IconSymbol } from '@/components/ui/IconSymbol';


type User = {
  id: number
  name: string
}

export default function TabTwoScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
      })
      .catch((err) => console.error("Failed to fetch users:", err))
  });

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.name.toLowerCase().includes(query.toLowerCase()))
  }, [query, users])



  return (
    <View>
      <View style={styles.jumbotron} >
        <IconSymbol
          size={310}
          color="#808080"
          name="paperplane.fill"
          style={{ position: "absolute", top: "-40%", left: "-10%" }}
        />
      </View>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={query}
            onChangeText={setQuery}
            placeholder="Search users..."
          />
          {query.length > 0 && (
            <Pressable style={styles.clearButtonContainer} onPress={() => setQuery('')}>
              <IconSymbol
                name="close"
                size={16}
                color="#fff"
              />
            </Pressable>
          )}

        </View>
        <View style={{ height: Dimensions.get('window').height * 0.55, marginTop: 16 }}>
          <FlatList
            data={filteredUsers}
            keyExtractor={(item, index) => `${item.id}-${index.toString()}`}
            ListEmptyComponent={<Text style={styles.empty}>No Users Found</Text>}
            renderItem={({ item }) => <Text style={styles.user}>{item.name}</Text>}
          />
        </View>
      </SafeAreaView>


    </View >
  );
}

const styles = StyleSheet.create({
  jumbotron: {
    width: "100%",
    height: Dimensions.get('window').height * 0.25,
    paddingBottom: 20,
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#D0D0D0",
  },
  mainContainer: {
    padding: 32
  },

  container: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 48,
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff'
  },
  user: {
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  empty: {
    fontSize: 16,
    padding: 20,
    textAlign: 'center',
    color: '#666',
  },
  clearButtonContainer: {
    position: 'absolute',
    right: 16,
    top: 12,
    backgroundColor: '#ccc',
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});