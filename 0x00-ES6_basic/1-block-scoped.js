export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
        const innerTask = true;
        const innerTask2 = false;
        return [innerTask2, innerTask];
    }

    return [task, task2];
}