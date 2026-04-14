@media (max-width: 768px){
  .sidebar{
    position: fixed;
    left: -100%;
    top: 0;
    height: 100%;
    z-index: 50;
    transition: 0.3s;
  }

  .sidebar.open{
    left: 0;
  }
}

button{
  min-height: 44px;
}