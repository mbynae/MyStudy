<script setup>
import { computed, reactive, ref } from 'vue';
import TotalList from './components/items/totalList.vue';

const text = ref([{ id: 0, contents: '입력 리스트' }]);
const input = ref('');
const count = ref(0);

const isActive = ref(false);
const isError = ref(false);

const onClick = () => {
    if (text.value[0].id === 0) {
        text.value.splice(0, 1);
    }
    if (input.value) {
        count.value++;
        text.value.push({ id: count.value, contents: input.value });
        input.value = '';
    }
};

const onDelete = list => {
    text.value = text.value.filter(e => e.id !== list.id);
};

const onCheck = () => {
    isActive.value = !isActive.value;
};

const totalList = computed(() => {
    if (text.value[0].id === 0) {
        return text.value.length - 1;
    } else {
        return text.value.length;
    }
});

const classObject = computed(() => ({
    'text-active': isActive.value && !isError.value,
    'text-danger': isError.value,
}));
</script>

<template>
    <header class="header">
        <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
        <section class="todoBox">
            <form @submit.prevent.stop class="todoForm">
                <div class="todoInput">
                    <input type="text" v-model="input" />
                    <button @click="onClick" class="todoAddBtn">리스트 추가</button>
                </div>
                <div class="todoList" v-for="(list, index) in text" :key="list.id">
                    <p class="classText" :class="classObject">
                        {{ `${index + 1}. ${list.contents}` }}
                    </p>
                    <button @click="onDelete(list)" v-if="list.id !== 0">삭제</button>
                </div>
            </form>
        </section>
        <!-- <div class="totalList">총 리스트 수: {{ totalList }}개</div>
        <button @click="onCheck" class="colorCheckBtn">체크</button> -->
        <TotalList :click="onCheck" :totalList="totalList" />
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
    margin-bottom: 10px;
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
    width: 100%;
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

.todoList {
    display: flex;
    align-items: center;
}

.todoList .classText {
    font-size: 20px;
    color: #fff;
    margin-right: 5px;
}
.todoList .classText.text-active {
    color: #41b883;
}
.todoList .classText.text-danger {
    color: #f3de24;
}

.todoList button {
    font-size: 14px;
    color: #000;
    border-radius: 6px;
    padding: 3px;
    cursor: pointer;
}

.totalList {
    margin-bottom: 5px;
    background-color: #000;
}
.colorCheckBtn {
    padding: 5px;
    border-radius: 5px;
    padding: 5px 10px;
    border: 1px solid #828282;
    background-color: #eee;
    color: #34495e;
    cursor: pointer;
}
</style>
