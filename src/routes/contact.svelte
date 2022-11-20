<script>
    import { onMount } from 'svelte'
    onMount(async function () {
    const handleMessageCount = () => {
      var msg = document.getElementById('message').value
      var msgCount = document.getElementById('message-count')
      var msgLength = msg.length
      const maxLength = 1000
      var charLeft = maxLength - msgLength
      msgCount.innerText = charLeft
    }
    message.addEventListener('input', handleMessageCount)
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        let myForm = document.getElementById('myform')
        let formData = new FormData(myForm)
        fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
        })
        .then(() => console.log('Form successfully submitted'))
        .catch((error) => alert(error))
    }
</script>
<svelte:head>
  <title>Aesculapius | Contact</title>
</svelte:head>

<div class="flex flex-col justify-evenly">
    <hr/>
    <p
      class="flex justify-center items-baseline gap-4 !mb-2 title_header px-10 text-[#000000] dark:text-[#FFFFFF]"
    >
      Contact
    </p>
    <hr />
    <section id="contact" class="justify-center">
      <div class="title-container scroll-in">
        <p class="section-subtitle">
            Have a question or want to get in touch?
        </p>
      </div>
      <div class="contact-content">
        <div class="form-container scroll-in">
          <p class="success-message" />
          <form
            name="contact"
            on:submit{handleSubmit}
            method="POST"
            netlify
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="input-container">
              <input type="text" id="name" name="name" required class="form-input" />
              <label for="name">Name:</label>
            </div>
            <div class="input-container">
              <input type="email" id="email" name="email" required class="form-input" />
              <label for="email">Email:</label>
            </div>
            <div class="input-container">
              <input type="text" id="subject" name="subject" class="form-input" />
              <label for="subject">Subject (optional):</label>
            </div>
            <div class="input-container">
              <textarea required maxlength="1000" id="message" name="message" class="form-input" />
              <label for="message">Message:<br /> </label>
              <small>
                <span id="message-count">1000</span> characters
              </small>
            </div>
            <div>
              <button
                class="bg-opacity-50 dark:bg-opacity-50 text-gray-800 bg-[#606060] dark:bg-[#606060] dark:text-gray-200 px-8 text-opacity-50"
                type="submit"
                id="submitButton">Submit</button
              >
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  