<!-- components/TiptapEditor.vue -->
<template>
  <div class ='height700'>
    <div v-if="editor" class="toolbar">
	

	
	
	<button type="button"
	@click="editor.chain().focus().toggleBold().run()"
	:disabled="!editor.can().chain().focus().toggleBold().run()"
	 :class="{ 'is-active': editor.isActive('bold') }">
	bold
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleItalic().run()"
	:disabled="!editor.can().chain().focus().toggleItalic().run()"
	 :class="{ 'is-active': editor.isActive('talic') }">
	italic
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleStrike().run()"
	:disabled="!editor.can().chain().focus().toggleStrike().run()"
	:class="{ 'is-active': editor.isActive('strike') }">
	strike
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleCode().run()"
	:disabled="!editor.can().chain().focus().toggleCode().run()"
	:class="{ 'is-active': editor.isActive('code') }">
	code
	</button>
	<button type="button" @click="editor.chain().focus().unsetAllMarks().run()">
	clear marks
	</button>
	<button type="button" @click="editor.chain().focus().clearNodes().run()">
	clear nodes
	</button>
	<button type="button"
	@click="editor.chain().focus().setParagraph().run()">
	paragraph
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
	h1
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
	h2
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
	h3
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
	h4
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
	>
	h5
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
	:class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
	h6
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleBulletList().run()"
	:class="{ 'is-active': editor.isActive('bulletList') }">
	bullet list
	</button>
    <button type="button"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }" >
        ordered list
    </button>
	
	<button type="button"
		@click="editor.chain().focus().setColor('white').run()"
		:class="{ 'is-active': editor.isActive('textStyle', { color: 'white' }) }"
		class="p-2 bg-black-500 text-white rounded" >
		White
	</button>
	
	<button type="button"
		@click="editor.chain().focus().setColor('black').run()"
		:class="{ 'is-active': editor.isActive('textStyle', { color: 'black' }) }"
		class="p-2 bg-black-500 text-white rounded" >
		Black
	</button>	
	  
	<button type="button"
		@click="editor.chain().focus().setColor('red').run()"
		:class="{ 'is-active': editor.isActive('textStyle', { color: 'red' }) }"
		class="p-2 bg-red-500 text-white rounded" >
		Red
	</button>
	
	<button type="button"
		@click="editor.chain().focus().setColor('green').run()"
		:class="{ 'is-active': editor.isActive('textStyle', { color: 'green' }) }"
		class="p-2 bg-green-500 text-white rounded" >
		Green
	</button> 

	<button type="button"
		@click="editor.chain().focus().setColor('blue').run()"
		:class="{ 'is-active': editor.isActive('textStyle', { color: 'blue' }) }"
		class="p-2 bg-blue-500 text-white rounded" >
		Blue
	</button>   
	  
	<button type="button"
	@click="editor.chain().focus().toggleCodeBlock().run()"
	:class="{ 'is-active': editor.isActive('codeBlock') }"
	>
	code block
	</button>
	<button type="button"
	@click="editor.chain().focus().toggleBlockquote().run()"
	:class="{ 'is-active': editor.isActive('blockquote') }"
	>
	blockquote
	</button>
	<button @click="editor.chain().focus().setHorizontalRule().run()" type="button">
	horizontal rule
	</button>
	<button @click="editor.chain().focus().setHardBreak().run()" type="button">
	hard break
	</button>
	<button
	@click="editor.chain().focus().undo().run()" type="button"
	:disabled="!editor.can().chain().focus().undo().run()">
	undo
	</button>
	<button type="button"
	@click="editor.chain().focus().redo().run()"
	:disabled="!editor.can().chain().focus().redo().run()">
	redo
	</button>
	  
	 

	        
    </div>
  
  </div>  

	
	<editor-content :editor="editor"  class = 'textarealong2border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 
	focus:border-indigo-500 sm:text-sm'/>

</template>

<script setup>


import { ref, onBeforeUnmount, watch } from 'vue';
import { useEditor, EditorContent } from '@tiptap/vue-3';


import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'



const props = defineProps({
  modelValue: String, // Receiving v-model value from parent
});

const emit = defineEmits(['update:modelValue']); // To emit the updated value back

const editor = useEditor({
  content: props.modelValue, // Initialize with the modelValue
  extensions: [StarterKit, Color , ListItem , TextStyle],
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getHTML()); // Emit updated content to the parent
  },
});

watch(() => props.modelValue, (newValue) => {
  if (editor && editor.value && editor.value.getHTML() !== newValue) {
    editor.value.commands.setContent(newValue); // Sync changes from parent to editor
  }
});

onBeforeUnmount(() => {
  editor.value.destroy();
});






</script>

<style>
.height700
{
	min-height:100px;width:100%;clear:both;
}
.textareashort
{
	height:100px;
}
.textarealong2border
{
	min-height:300px !important;height:auto;border:1px solid green !important;width:100% !important;
	padding:12px 12px 7px 15px;;
}
.textarealongborder
{
	min-height:150px !important;height:auto; border:1px solid green !important;width:700px !important;min-height:150px !important;
}

.editable-content 
{
  border: 0 !important; /* Default border */
  border-radius: 5px;
  padding: 10px;
  min-height: 130px !important; /* Set a minimum height */
  max-height: 500px !important; /* Optional: Set a maximum height */
  overflow-y: auto; /* Add scrollbar if content exceeds max height */
}


.editable-content:focus {
  outline: none !important;
  border: 1px solid transparent !important; 
}

.editable-content p {
  margin: 0;
  padding: 0; /* Reset margins and padding */
  min-height: 20px; /* Ensures each <p> has a minimum height */
  margin-bottom: 10px; /* Adds space between paragraphs */  outline: none !important;
  border: 1px solid transparent !important; 
}
.editable-content input {
  margin: 0;
  padding: 0; /* Reset margins and padding */
  min-height: 110px; /* Ensures each <p> has a minimum height */
  height:auto;
  margin-bottom: 10px; /* Adds space between paragraphs */  outline: none !important;
  border: 1px solid transparent !important; 
}
.ProseMirror:focus , .editable-content input:focus
{
  outline: none !important;
  border: 1px solid transparent !important; 
}

.marginleft5
{
	margin-left:5px !important;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  border: 1px solid #ddd;
}

/* Button styling */
.toolbar button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
  outline: none;
}

/* Styling for active buttons */
.toolbar button.is-active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

/* Styling for inactive buttons */
.toolbar button:not(.is-active) {
  background-color: #e0e0e0;
  color: #333;
}

/* Hover and focus effects */
.toolbar button:hover,
.toolbar button:focus {
  background-color: #007bff;
  color: white;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

/* Disabled button styling */
.toolbar button:disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  box-shadow: none;
}
</style>



