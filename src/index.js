import $ from 'jquery';
import './index.css';
  
function generateBio(){
  return `<p>My name is Kasia. I am an artist turned web-developer. I create and build. I create new reality through art projects. I am studying web-development at Thinkful to build experiences that reach bigger audience and inspire change. I am passionate about mindful life-style with respect for the Earth and future
  generations of both humans and animals. I aspire to build better reality through every app I create.
  <br>
  I love learning and challenging my-self. I have a curious, investigative mind and entrepreneurial background of running a decorative-painting business creating beautiful interiors. I “have an eye” and awareness of how the visual stimuli affects decision-making. I’m fascinated by the importance of structure in every process of creation, love studying the architecture and steps involved in creating a working app. Code for me is a metaphor of every pattern in nature with its system of cause and effect, hidden network of dependencies between components, clarity of what is working yet diversity of ways to
  accomplish the task.
  <br>
  When I’m not studying programming, you will find me in the air working on my next performance in aerial silks or teaching yoga at the local YMCA.</p>`
}
function handleEnter(){
  $('#center').on('click', '#enter-button', (event => {
    event.preventDefault();
    const html = generateBio();
    $('#bio').html(html);
  }))
}

$(document).ready(function() {
  handleEnter();
});