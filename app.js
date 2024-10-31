// ডাইনামিক টোস্ট মেসেজ দেখানোর ফাংশন
const showToast = (message, duration = 3000) => {
    const toast = document.getElementById('toastMessage');
    toast.textContent = message;  // ডাইনামিক মেসেজ সেট করা
    toast.classList.add('show');  // টোস্ট মেসেজ প্রদর্শন

    // নির্দিষ্ট সময় পরে টোস্ট মেসেজ লুকানো হয়
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
};

// বোতামে ক্লিক করার সময় টোস্ট দেখানো হয়
document.getElementById('showToastBtn').addEventListener('click', () => {
    showToast('This is a dynamic toast message!', 3000);
});
