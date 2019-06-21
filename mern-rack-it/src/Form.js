import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form>
        <p>Name:</p>
        <input type="text" name="name" />
        <p>Equipment:</p>
        <input type="text" name="equipment" />
        <p>Description:</p>
        <input type="text" name="description" />
        <form>
          <p>Primary Muscles:</p>
          <input type="radio" name="muscle" value="Anterior deltoid" checked />
          Anterior deltoid
          <input type="radio" name="muscle" value="Biceps brachii" /> Biceps
          brachii
          <input type="radio" name="muscle" value="Biceps femoris" /> Biceps
          femoris
          <input type="radio" name="muscle" value="Brachialis" checked />{" "}
          Brachialis
          <input type="radio" name="muscle" value="Gastrocnemius" />{" "}
          Gastrocnemius
          <input type="radio" name="muscle" value="Gluteus maximus" /> Gluteus
          maximus
          <input type="radio" name="muscle" value="Latissimus dorsi" checked />
          Latissimus dorsi
          <input
            type="radio"
            name="muscle"
            value="Obliquus externus abdominis"
          />
          Obliquus externus abdominis
          <input
            type="radio"
            name="muscle"
            value="Obliquus externus abdominis"
          />
          Obliquus externus abdominis
          <input
            type="radio"
            name="muscle"
            value="Quadriceps femoris"
            checked
          />
          Quadriceps femoris
          <input type="radio" name="muscle" value="Rectus abdominis" /> Rectus
          abdominis
          <input type="radio" name="muscle" value="Serratus anterior" />
          Serratus anterior
          <input type="radio" name="muscle" value="Soleus" checked /> Soleus
          <input type="radio" name="muscle" value="Trapezius" /> Trapezius
          <input type="radio" name="muscle" value="Triceps brachii" /> Triceps
          brachii
        </form>
        <p>Secondary Muscles:</p>
        <input type="radio" name="muscle" value="Anterior deltoid" checked />
        Anterior deltoid
        <input type="radio" name="muscle" value="Biceps brachii" /> Biceps
        brachii
        <input type="radio" name="muscle" value="Biceps femoris" /> Biceps
        femoris
        <input type="radio" name="muscle" value="Brachialis" checked />{" "}
        Brachialis
        <input type="radio" name="muscle" value="Gastrocnemius" /> Gastrocnemius
        <input type="radio" name="muscle" value="Gluteus maximus" /> Gluteus
        maximus
        <input type="radio" name="muscle" value="Latissimus dorsi" checked />
        Latissimus dorsi
        <input type="radio" name="muscle" value="Obliquus externus abdominis" />
        Obliquus externus abdominis
        <input type="radio" name="muscle" value="Obliquus externus abdominis" />
        Obliquus externus abdominis
        <input type="radio" name="muscle" value="Quadriceps femoris" checked />
        Quadriceps femoris
        <input type="radio" name="muscle" value="Rectus abdominis" /> Rectus
        abdominis
        <input type="radio" name="muscle" value="Serratus anterior" />
        Serratus anterior
        <input type="radio" name="muscle" value="Soleus" checked /> Soleus
        <input type="radio" name="muscle" value="Trapezius" /> Trapezius
        <input type="radio" name="muscle" value="Triceps brachii" /> Triceps
        brachii
      </form>
    );
  }
}

export default Form;
