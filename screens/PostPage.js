import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';  
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

const PostPage = () => {
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState(null);
  const [proofOfOwnership, setProofOfOwnership] = useState(null);
  const [vetCertificate, setVetCertificate] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const pickDocument = async (setDocument) => {
    let result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
    if (result.type === 'success') {
      setDocument(result);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        {/* Image Upload */}
        <View style={styles.uploadContainer}>
          <TouchableOpacity onPress={pickImage} style={styles.uploadButton}>
            {image ? (
              <Image source={{ uri: image }} style={styles.imagePreview} />
            ) : (
              <Text style={styles.uploadText}>Upload Photos</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Category Picker */}
        <View style={styles.inputContainer}>
          <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)} style={styles.picker}>
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="Cattle" value="Cattle" />
            <Picker.Item label="Horse" value="Horse" />
            <Picker.Item label="Carabao" value="Carabao" />
            <Picker.Item label="Pig" value="Pig" />
            <Picker.Item label="Sheep" value="Sheep" />
            <Picker.Item label="Goat" value="Goat" />
          </Picker>
        </View>

        {/* Proof of Ownership Upload */}
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => pickDocument(setProofOfOwnership)} style={styles.uploadButton}>
            <Text style={styles.uploadText}>Proof of Ownership</Text>
          </TouchableOpacity>
        </View>

        {/* Vet Certificate Upload */}
        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={() => pickDocument(setVetCertificate)} style={styles.uploadButton}>
            <Text style={styles.uploadText}>Vet Certificate</Text>
          </TouchableOpacity>
        </View>

        {/* Breed and Age */}
        <View style={styles.doubleInputContainer}>
          <TextInput placeholder="Breed" style={styles.doubleInput} />
          <TextInput placeholder="Age" style={styles.doubleInput} keyboardType="numeric" />
        </View>

        {/* Gender Picker */}
        <View style={styles.inputContainer}>
          <Picker selectedValue={gender} onValueChange={(itemValue) => setGender(itemValue)} style={styles.picker}>
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
          </Picker>
        </View>

        {/* Weight Input */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Weight" style={styles.input} keyboardType="numeric" />
        </View>

        {/* Starting Price Input */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Starting Price" style={styles.input} keyboardType="numeric" />
        </View>

        {/* Auction Date Input */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Date and time auction will end" style={styles.input} />
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    elevation: 3, // for shadow in Android
    shadowColor: '#000', // for shadow in iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  uploadContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 200,
  },
  uploadButton: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 16,
    color: '#f8f8f8',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  doubleInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  doubleInput: {
    width: '48%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  picker: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    width: '48%',
    backgroundColor: 'transparent', // Transparent background for signup button
    paddingVertical: 7,
    borderRadius: 2,
    borderColor: '#405e40', // Dark green border
    borderWidth: 2,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  uploadButton: {
    width: '48%',
    height: 40,
    backgroundColor: '#335441',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default PostPage;
