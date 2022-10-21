// import 'dotenv/config';
// import * as mongoose from 'mongoose';
// import FrameModel from './models/Frame';

// const seed = async () => {
//   mongoose.connect('mongodb://127.0.0.1:27018/glassesStore');

//   console.log('Connected to MongoDB');

//   const frames = [
//     { material: 'iron', color: 'purple' },
//     { material: 'plastic', color: 'blue' },
//     { material: 'wood', color: 'white' },
//     { material: 'plastic', color: 'green' },
//   ];

//   try {
//     await FrameModel.insertMany(frames);
//     console.log('Frames created');
//   } catch (error) {
//     console.log('Seeder failed - Erro: ', error);
//   }
//   await mongoose.connection.close();
// };

// seed();