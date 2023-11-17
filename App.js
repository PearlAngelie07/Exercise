import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const accountsData = [
  { ID: 1, username: 'teacher1', password: 'teacherpass1', usertype: 'Teacher' },
  { ID: 2, username: 'student1', password: 'studentpass1', usertype: 'Student' },
  { ID: 3, username: 'teacher2', password: 'teacherpass2', usertype: 'Teacher' },
  { ID: 4, username: 'student2', password: 'studentpass2', usertype: 'Student' },
  { ID: 5, username: 'teacher3', password: 'teacherpass3', usertype: 'Teacher' },
  { ID: 6, username: 'student3', password: 'studentpass3', usertype: 'Student' },
  { ID: 7, username: 'teacher4', password: 'teacherpass4', usertype: 'Teacher' },
  { ID: 8, username: 'student4', password: 'studentpass4', usertype: 'Student' },
  { ID: 9, username: 'teacher5', password: 'teacherpass5', usertype: 'Teacher' },
  { ID: 10, username: 'student5', password: 'studentpass5', usertype: 'Student' },
];

const usersData = [
  { ID: 1, firstname: 'Jiraiya', lastname: 'Sensei', course: 'Computer Science', year: '3', section: 'A' },
  { ID: 2, firstname: 'Naruto', lastname: 'Sakura', course: 'Mathematics', year: '2', section: 'B' },
  { ID: 3, firstname: 'Saturo', lastname: 'Gojo', course: 'Physics', year: '4', section: 'C' },
  { ID: 4, firstname: 'Yuji', lastname: 'Itadori', course: 'Chemistry', year: '1', section: 'D' },
  { ID: 5, firstname: 'Xeno', lastname: 'Wingfield', course: 'Biology', year: '2', section: 'A' },
  { ID: 6, firstname: 'Senku', lastname: 'Ishigami', course: 'English', year: '3', section: 'B' },
  { ID: 7, firstname: 'Kakashi', lastname: 'Hatake', course: 'History', year: '4', section: 'C' },
  { ID: 8, firstname: 'Sasuke', lastname: 'Uchiha', course: 'Geography', year: '1', section: 'D' },
  { ID: 9, firstname: 'Asuma', lastname: 'Sarutubi', course: 'Mathematics', year: '2', section: 'A' },
  { ID: 10, firstname: 'Shikamaru', lastname: 'Nara', course: 'Computer Science', year: '3', section: 'B' },
];

const studentsData = accountsData
  .filter((account) => account.usertype === 'Student')
  .map((student) => ({
    ID: student.ID,
    name: usersData.find((user) => user.ID === student.ID)?.firstname || '',
    course: usersData.find((user) => user.ID === student.ID)?.course || '',
  }));

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  tableContainer: { marginTop: 10, marginBottom:20 },
  head: { height: 40, backgroundColor: '#add8e6' },
  text: { margin: 6, textAlign:'center' },
});

const App = () => {
  const renderTable = (data, headers) => (
    <Table borderStyle={{ borderWidth: 1, borderColor: 'darkblue' }}>
      <Row data={headers} style={styles.head} textStyle={styles.text} />
      {data.map((rowData, index) => (
        <Row key={index} data={Object.values(rowData)} textStyle={styles.text} />
      ))}
    </Table>
  );

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold'}}>Accounts Table</Text>
      <ScrollView style={styles.tableContainer}>
        {renderTable(accountsData, ['ID', 'Username', 'Password', 'User Type'])}
      </ScrollView>

      <Text style={{fontWeight:'bold'}}>Users Table</Text>
      <ScrollView style={styles.tableContainer}>
        {renderTable(usersData, ['ID', 'First Name', 'Last Name', 'Course', 'Year', 'Section'])}
      </ScrollView>

      <Text style={{fontWeight:'bold'}}>Students Table</Text>
      <ScrollView style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row data={['ID', 'Name', 'Course']} style={styles.head} textStyle={styles.text} />
          <FlatList
            data={studentsData}
            keyExtractor={(item) => item.ID.toString()}
            renderItem={({ item }) => (
              <Row data={[item.ID, item.name, item.course]} textStyle={styles.text} />
            )}
          />
        </Table>
      </ScrollView>
    </View>
  );
};

export default App;
