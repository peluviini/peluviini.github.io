
use std::{f32::consts::PI, time::Duration};

use bevy::{
    pbr::CascadeShadowConfigBuilder,
    prelude::*,
};


#[derive(Component)]
struct MyCameraMarker;

#[derive(Component)]
struct Keyoboard;


fn main() {
    App::new()
        .add_plugins(DefaultPlugins.set(WindowPlugin {
            primary_window: Some(Window {
                resolution: (1400.0, 1050.0).into(),
                ..default()
            }),
            ..default()
        }))
        .add_systems(Startup, setup)
        .run();
}

fn setup(
    mut commands: Commands,
    asset_server: Res<AssetServer>,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
    mut animation_graphs: ResMut<Assets<AnimationGraph>>,
) {
    //let font = asset_server.load("fonts/NotoSans-VariableFont_wdth,wght.ttf");

    let mut radius = 25.0;
    commands.spawn((
        Camera3d::default(),
        Transform::from_xyz(18.0, 26.0, 4.0)
            .looking_at(Vec3::new(-15.0, 6.0, 0.0), Vec3::Y),
    ));
    commands.spawn((
        Mesh3d(meshes.add(Plane3d::default().mesh().size(5000.0, 5000.0))),
        MeshMaterial3d(materials.add(Color::srgb(0.2, 0.2, 0.2))),
    ));
    commands.spawn((
        Transform::from_rotation(Quat::from_euler(EulerRot::ZYX, 0.0, 1.0, -PI / 4.)),
        DirectionalLight {
            illuminance: 800.0,
            shadows_enabled: true,
            ..default()
        },
        CascadeShadowConfigBuilder {
            first_cascade_far_bound: 0.9 * radius,
            maximum_distance: 2.8 * radius,
            ..default()
        }
        .build(),
    ));

    
    commands.spawn((
        SceneRoot(asset_server.load(GltfAssetLabel::Scene(0).from_asset("blender/laptop3.glb"))),
        Transform::from_xyz(0.0, 0.0, 15.0),
    ));
    commands.spawn((
        Text::new("peluviini's desk"),
        TextColor(Color::srgb(0.9, 0.9, 0.9)),
        Node {
            position_type: PositionType::Absolute,
            bottom: Val::Px(12.0),
            left: Val::Px(12.0),
            ..default()
        },
    ));
}