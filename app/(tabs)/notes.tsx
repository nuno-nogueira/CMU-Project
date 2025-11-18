import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/themed-view';

export default function NotesScreen() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<{ id: string; text: string }[]>([]);

  const addNote = () => {
    if (!note.trim()) return;
    setNotes([...notes, { id: Date.now().toString(), text: note }]);
    setNote('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <ThemedView style={styles.container}>
      <Text style={styles.h1}>Notas Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreve uma nota..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Adicionar" onPress={addNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemedView style={styles.noteItem}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  h1: {fontSize: 32, fontWeight: "bold", marginTop: 40},
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 5,
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  delete: { color: 'red' },
});
