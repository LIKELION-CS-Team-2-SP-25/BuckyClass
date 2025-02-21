import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Button,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen({
    navigation,
}: {
    navigation: HomeScreenNavigationProp;
}) {
    const [search, setSearch] = useState("");
    const categories = ["Category1", "Category2", "Category3"];
    const recentReviews = ["Review 1", "Review 2", "Review 3"];
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const courses = [
        { id: "1", title: "React Native Basics", category: "Category1" },
        { id: "2", title: "Advanced React Hooks", category: "Category2" },
        { id: "3", title: "UI/UX Design Principles", category: "Category3" },
    ];

    const filteredCourses = courses.filter((course) => {
        const matchesSearch = search.trim()
            ? course.title.toLowerCase().includes(search.toLowerCase())
            : true;
        const matchesCategory = selectedCategory
            ? course.category === selectedCategory
            : true;
        return matchesSearch && matchesCategory;
    });

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>BuckyClass</Text>

                {/* 검색 섹션 */}
                <View style={styles.searchSection}>
                    <TextInput
                        placeholder="Search courses..."
                        value={search}
                        onChangeText={setSearch}
                        style={styles.searchInput}
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity
                        style={styles.searchButton}
                        onPress={() => {
                            /* 검색 기능 구현 */
                        }}
                    >
                        <Text style={styles.searchButtonText}>Search</Text>
                    </TouchableOpacity>
                </View>

                {/* 카테고리 필터 섹션 */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Filter by Category</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {categories.map((cat, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() =>
                                    setSelectedCategory(
                                        selectedCategory === cat ? null : cat
                                    )
                                }
                                style={[
                                    styles.categoryButton,
                                    selectedCategory === cat &&
                                        styles.categoryButtonSelected,
                                ]}
                            >
                                <Text
                                    style={[
                                        styles.categoryText,
                                        selectedCategory === cat &&
                                            styles.categoryTextSelected,
                                    ]}
                                >
                                    {cat}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    {selectedCategory && (
                        <Text style={styles.selectedCategoryLabel}>
                            Filter: {selectedCategory}
                        </Text>
                    )}
                </View>

                {/* 강의 카드 목록 섹션 */}
                <View style={styles.section}>
                    {filteredCourses.map((course) => (
                        <TouchableOpacity
                            key={course.id}
                            onPress={() =>
                                navigation.navigate("CourseDetails", {
                                    courseId: course.id,
                                })
                            }
                            style={styles.card}
                        >
                            <Text style={styles.cardTitle}>{course.title}</Text>
                            <Text style={styles.cardSubtitle}>
                                {course.category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* 최근 리뷰 섹션 */}
                <View style={styles.section}>
                    <Text style={styles.sectionHeader}>Recent Reviews</Text>
                    {recentReviews.map((review, idx) => (
                        <View key={idx} style={styles.reviewCard}>
                            <Text style={styles.reviewText}>{review}</Text>
                        </View>
                    ))}
                </View>

                {/* 하단 네비게이션 버튼 */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate("Courses")}
                    >
                        <Text style={styles.navButtonText}>View Courses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.navButton}
                        onPress={() => navigation.navigate("ChatList")}
                    >
                        <Text style={styles.navButtonText}>Go to Chat</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    container: {
        padding: 20,
    },
    header: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 20,
    },
    searchSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    searchInput: {
        flex: 1,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        fontSize: 16,
        color: "#333",
    },
    searchButton: {
        marginLeft: 10,
        backgroundColor: "#4A90E2",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    searchButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    section: {
        marginBottom: 25,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: "600",
        color: "#444",
        marginBottom: 12,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginRight: 12,
        borderRadius: 20,
        backgroundColor: "#eee",
    },
    categoryButtonSelected: {
        backgroundColor: "#4A90E2",
    },
    categoryText: {
        fontSize: 16,
        color: "#555",
    },
    categoryTextSelected: {
        color: "#fff",
    },
    selectedCategoryLabel: {
        marginTop: 10,
        fontSize: 14,
        color: "#777",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        marginBottom: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
    },
    cardSubtitle: {
        marginTop: 6,
        fontSize: 16,
        color: "#777",
    },
    reviewCard: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    reviewText: {
        fontSize: 16,
        color: "#555",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    navButton: {
        backgroundColor: "#4A90E2",
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 30,
    },
    navButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
