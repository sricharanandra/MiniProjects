$host = 'localhost';
$username = 'root';
$password = '';
$database = 'student_database';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM students";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Student Records in Ascending Order:<br>";
    $sql = "SELECT * FROM students ORDER BY name ASC";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Roll No: " . $row["roll_no"]. " - Marks: " . $row["marks"]. "<br>";
    }

    echo "<br>Student Records in Descending Order:<br>";
    $sql = "SELECT * FROM students ORDER BY name DESC";
    $result = $conn->query($sql);
    while($row = $result->fetch_assoc()) {
        echo "Name: " . $row["name"]. " - Roll No: " . $row["roll_no"]. " - Marks: " . $row["marks"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();