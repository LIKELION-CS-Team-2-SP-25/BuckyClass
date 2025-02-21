import React from "react";
import {
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";

type CoursesScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Courses"
>;

const courses = [
    { id: "1", title: "React Native Basics", category: "Category1" },
    { id: "2", title: "Advanced React Hooks", category: "Category2" },
    { id: "3", title: "UI/UX Design Principles", category: "Category3" },
    { id: "4", title: "React Native Basics", category: "Category1" },
    { id: "5", title: "Advanced React Hooks", category: "Category2" },
    { id: "6", title: "UI/UX Design Principles", category: "Category3" },
    { id: "7", title: "React Native Basics", category: "Category1" },
    { id: "8", title: "Advanced React Hooks", category: "Category2" },
    { id: "9", title: "UI/UX Design Principles", category: "Category3" },
    { id: "10", title: "React Native Basics", category: "Category1" },
    { id: "11", title: "Advanced React Hooks", category: "Category2" },
    { id: "12", title: "UI/UX Design Principles", category: "Category3" },
];

export default function CoursesScreen({
    navigation,
}: {
    navigation: CoursesScreenNavigationProp;
}) {
    const registerCourse = (courseId: string) => {
        // 강의 등록 기능 구현
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Courses List</Text>
            <FlatList
                data={courses}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("CourseDetails", {
                                courseId: item.id,
                            })
                        }
                    >
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardCategory}>{item.category}</Text>
                        <View style={styles.buttonGroup}>
                            <Button
                                title="Register"
                                onPress={() => registerCourse(item.id)}
                                color="#4A90E2"
                            />
                            <Button
                                title="View Details"
                                onPress={() =>
                                    navigation.navigate("CourseDetails", {
                                        courseId: item.id,
                                    })
                                }
                                color="#4A90E2"
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
            {/* ...existing code... */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        padding: 16,
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 16,
    },
    listContainer: {
        paddingBottom: 16,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    cardCategory: {
        fontSize: 14,
        color: "#777",
        marginVertical: 8,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
