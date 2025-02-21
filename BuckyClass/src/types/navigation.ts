export type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    Home: undefined;
    ChatScreen: undefined;
    Courses: undefined;
    CourseDetails: { courseId: string };
    CourseChat: { courseId: string };
    ChatList: undefined;
    PrivateChat: { chatId: string };
};
