var showToast = (message) => {
    Materialize.toast(message, 5000);
};

setTimeout(() => {
    showToast('Welcome to the Van Alstyne High School Robotics webpage!');
}, 1000);
