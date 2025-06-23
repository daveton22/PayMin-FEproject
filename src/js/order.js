// Function to show the modal
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector(".modal-content");

  modal.classList.remove("hidden");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector(".modal-content");

  modal.classList.add("hidden");
}

function orderNext() {
  const orderAside = document.getElementById("sidebarOrderedList");
  const paymentAside = document.getElementById("sidebarPayment");

  orderAside.classList.add("hidden");
  paymentAside.classList.remove("hidden");
}

function paymentNext() {
  const paymentAside = document.getElementById("sidebarPayment");
  const finishAside = document.getElementById("sidebarFinish");

  paymentAside.classList.add("hidden");
  finishAside.classList.remove("hidden");
}

function paymentBack() {
  const orderAside = document.getElementById("sidebarOrderedList");
  const paymentAside = document.getElementById("sidebarPayment");

  orderAside.classList.remove("hidden");
  paymentAside.classList.add("hidden");
}

// Function to toggle sidebar
const sidebar = document.getElementById("sidebarOrderedList");
const orderList = document.getElementById("orderList");
let sidebarOpen = false;

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;

  if (sidebarOpen) {
    if (!sidebar.classList.contains("block")) {
      sidebar.classList.remove("hidden");
    }
    sidebar.classList.add("block");

    // Adjust grid columns based on screen width when sidebar is open
    adjustGridColumns();
  } else {
    sidebar.classList.add("hidden");
    sidebar.classList.remove("block");
    // Reset grid columns based on screen width when sidebar is closed
    adjustGridColumns();
  }

  console.log("Sidebar state:", sidebarOpen);
}

// Function to adjust grid columns based on screen width and sidebar state
function adjustGridColumns() {
  orderList.classList.remove(
    "grid-cols-1",
    "sm:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4"
  );

  // Base responsive grid
  orderList.classList.add("grid-cols-1");

  const screenWidth = window.innerWidth;

  if (sidebarOpen) {
    if (screenWidth >= 1280) {
      orderList.classList.add("sm:grid-cols-2", "lg:grid-cols-3");
    } else if (screenWidth >= 1024) {
      orderList.classList.add("sm:grid-cols-2");
    } else if (screenWidth >= 640) {
      orderList.classList.add("sm:grid-cols-1");
    }
  } else {
    orderList.classList.add(
      "sm:grid-cols-2",
      "lg:grid-cols-3",
      "xl:grid-cols-4"
    );
  }
}

window.addEventListener("resize", adjustGridColumns);
adjustGridColumns();

function confirmPayment() {
  const paymentSuccess = document.getElementById("processingPayment");
  const processingSection = document.getElementById("paymentSuccess");
  const successSection = document.getElementById("successPayment");

  // Tampilkan modal dan bagian processing
  paymentSuccess.classList.remove("hidden");
  processingSection.classList.remove("hidden");
  successSection.classList.add("hidden");

  // Sembunyikan invoice dan payment sidebar
  const invoiceModal = document.getElementById("modalInvoice");
  const paymentAside = document.getElementById("sidebarPayment");
  const finishAside = document.getElementById("sidebarFinish");

  invoiceModal.classList.add("hidden");
  paymentAside.classList.add("hidden");

  // Setelah delay 3 detik, tampilkan bagian sukses
  setTimeout(() => {
    processingSection.classList.add("hidden");
    successSection.classList.remove("hidden");
  }, 3000);

  // Setelah delay total 6.5 detik, sembunyikan modal dan tampilkan sidebarFinish
  setTimeout(() => {
    paymentSuccess.classList.add("hidden");
    finishAside.classList.remove("hidden");
  }, 6500);
}

const modalOrderFinish = document.getElementById("modalOrderFinish");
const processingSection = document.getElementById("processingPayment");
const successSection = document.getElementById("paymentSuccess");

function showPaymentProcessModal() {
  modalOrderFinish.classList.remove("hidden");
  processingSection.classList.remove("hidden");
  successSection.classList.add("hidden");

  document.getElementById("modalInvoice")?.classList.add("hidden");
  document.getElementById("sidebarPayment")?.classList.add("hidden");

  setTimeout(() => {
    processingSection.classList.add("hidden");
    successSection.classList.remove("hidden");
  }, 3500);

  setTimeout(() => {
    modalOrderFinish.classList.add("hidden");
    document.getElementById("sidebarFinish")?.classList.remove("hidden");
  }, 6500);
}
