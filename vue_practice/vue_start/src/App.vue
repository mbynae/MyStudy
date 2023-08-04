<script setup>
import { ref } from 'vue';

const text = ref([{ id: 0, contents: '입력 리스트' }]);
const input = ref('');
const count = ref(0);

const onClick = () => {
    if (input.value) {
        count.value++;
        text.value.push({ id: count.value, contents: input.value });
        input.value = '';
    }
};
</script>

<!-- <script setup>
import { nextTick, reactive } from 'vue';

const text = reactive({
    text: [{ id: 0, contents: '입력 리스트' }],
    input: '',
    count: 0,
});

const onClick = e => {
    text.count++;
    text.text.push({ id: text.count, contents: text.input });
    text.input = '';
};
</script> -->

<template>
    <header class="header">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <section class="todoBox">
            <form @submit.prevent.stop class="todoForm">
                <div class="todoInput">
                    <input type="text" v-model="input" />
                    <button @click="onClick" class="todoAddBtn">텍스트 추가</button>
                </div>
                <p :class="'classText'" v-for="list in text" :key="list.id">{{ `${list.id}. ${list.contents}` }}</p>
                <!-- <p v-else>토글된 텍스트</p> -->
                <!-- <button @click="e => onClick(e, '지랄')">토글 버튼</button> -->
            </form>
        </section>
    </header>
</template>

<style scoped>
.header {
    margin-top: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logo {
    display: block;
    margin: 0 auto 2rem;
}

.todoBox {
    display: flex;
    justify-content: center;
    width: 400px;
    min-height: 500px;
    padding: 40px;
    border: 2px solid #353535;
    border-radius: 10px;
    position: relative;
    background-color: #34495e;
}
.todoBox::before {
    content: '';
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border: 2px solid #fff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

.todoForm {
}

.todoForm .todoInput {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 20px;
}

.todoForm .todoInput input {
    padding: 5px 10px;
    border: 2px solid #34495e;
    border-radius: 5px;
}
.todoForm .todoInput .todoAddBtn {
    border: 1px solid #34495e;
    background-color: #41b883;
    color: #fff;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}

#classText {
    text-decoration: underline;
}
.classText {
    color: 'purple';
    font-size: 20px;
    color: #fff;
}
</style>
