<script>
    import { onMount } from "svelte";
    onMount(async function () {
        const handleMessageCount = () => {
            var msg = document.getElementById("message").value;
            var msgCount = document.getElementById("message-count");
            var msgLength = msg.length;
            const maxLength = 1000;
            var charLeft = maxLength - msgLength;
            msgCount.innerText = charLeft;
        };
        message.addEventListener("input", handleMessageCount);
    });
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let myForm = document.getElementById("myform");
    //     let formData = new FormData(myForm);
    //     fetch("/", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //         body: new URLSearchParams(formData).toString(),
    //     })
    //         .then(() => console.log("Form successfully submitted"))
    //         .catch((error) => alert(error));
    // };
</script>

<svelte:head>
    <title>Aesculapius | Contact</title>
</svelte:head>

<div class="absolute container justify-center top-[8rem] left-[6rem]">
    <h4>Contact the Aesculapius Team!</h4>
    <br />
    <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-[#c4ced9] text-xs font-bold mb-2"
                    for="name"
                >
                    Name
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    name="name"
                    placeholder="Jane"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-[#c4ced9] text-xs font-bold mb-2"
                    for="email"
                >
                    E-mail
                </label>
                <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="youremail@domain.com"
                />
            </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <label
                    class="block uppercase tracking-wide text-[#c4ced9] text-xs font-bold mb-2"
                    for="message"
                >
                    Message
                </label>
                <textarea
                    class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    name="message"
                    id="message"
                />
                <small>
                    <span id="message-count">1000</span> characters
                </small>
            </div>
        </div>
        <div class="md:flex md:items-center">
            <div class="md:w-1/3">
                <button
                    class="shadow bg-slate-400 hover:bg-slate-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    id="submitButton"
                >
                    Send
                </button>
            </div>
            <div class="md:w-2/3" />
        </div>
    </form>
</div>
