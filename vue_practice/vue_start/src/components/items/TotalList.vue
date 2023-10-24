<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    click: Function,
    totalList: Number,
});

const toggleBtn = ref(true);
const today = ref(new Date().toLocaleString());

const toggelBtnHandler = () => {
    toggleBtn.value = !toggleBtn.value;
};

onMounted(() => {
    setInterval(() => {
        today.value = new Date().toLocaleString();
    }, 1000);
});
</script>

<template>
    <div class="container">
        <button class="toggleBtn" @click="toggelBtnHandler">토글 버튼</button>
        <template v-if="toggleBtn">
            <div class="totalList">총 리스트 수: {{ totalList }}개</div>
            <!-- <button :class="$attrs.btnClass" @click="onCheck">체크</button> -->
            <button class="colorCheckBtn" @click="click">체크</button>
        </template>

        <template v-else>
            <div>현재 시간 : {{ today }}</div>
        </template>
    </div>
</template>

<style scoped>
.container {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.toggleBtn {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 16px;
    border: 1px solid #666;
    background-color: inherit;
    border-radius: 5px;
    padding: 2px;
    cursor: pointer;
}
.totalList {
    margin-bottom: 5px;
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
